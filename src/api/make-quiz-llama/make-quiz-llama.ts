import axios from "axios";

interface QuizQuestion {
  cognitive_level: string;
  competency: string;
  correct_answer: string;
  options: string[];
  question_stem: string;
}

interface QuizResponse {
  example_questions: QuizQuestion[];
}

interface QuizWithStory {
  quiz: QuizResponse;
  story: string;
}

export const LlamaMakeQuiz = async (story: string): Promise<QuizWithStory | Error> => {
  try {
    console.log('REQUESTING TO COLAB...');
    const response = await axios.post<QuizResponse>('https://musical-instantly-lionfish.ngrok-free.app/make-quiz', {
      "story": story
    });

    // Check if the response has the expected structure
    if (response.data && response.data.example_questions) {
      return {
        quiz: response.data,
        story: story
      };
    } else {
      throw new Error("Unexpected response structure from the server");
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      // Handle Axios errors
      console.error("Axios error:", error.message);
      return new Error(`Failed to make quiz: ${error.message}`);
    } else {
      // Handle other errors
      console.error("Error:", error);
      return new Error("An unexpected error occurred while making the quiz");
    }
  }
};
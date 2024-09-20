import axios from "axios";

export const sendTextForTTS = async (input_text: string) => {
    try {
        console.log('REQUESTING TO COLAB...');
        const url = 'https://musical-instantly-lionfish.ngrok-free.app'
        const response = axios.post(url + '/chronicles-tts', {
            "text": input_text
        });

        console.log("message: ", (await response).data.audio_file);

        return {
            download_url: url + '/download-audio/'+ (await response).data.audio_file,
        }
    } catch (error: any) {
        return error;
    }
}
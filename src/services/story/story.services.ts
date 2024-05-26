import * as exceptions from '../../common/exceptions/exceptions';
import * as storyRepository from '../../data-access/repositories/story/story.repositories';

import { validateStory } from './story.validator';
import { Story, StoryOutput } from '../../data-access/models/story/story';

export const createStory = async (newStory:Story): Promise<StoryOutput> => {
    validateStory(newStory);

    const judulStoryExist: boolean = await storyRepository.existJudulOfStory(newStory.judul);
    if (judulStoryExist) {
        throw new exceptions.ElementAlreadyExists(`Judul ${newStory.judul} already exist`);
    }

    return await storyRepository.createStory(newStory);
}

export const deleteStory = async (id: string): Promise<string> => {
    const existingStory: boolean = await storyRepository.existingStoryById(id);
    if (!existingStory) {
        throw new exceptions.ElementNotFoundException(`Story with id ${id} not found`);
    }

    return await storyRepository.deleteStory(id);
}

export const getKelompokByStory = async (id: string): Promise<StoryOutput | null> => {
    const existingStory: boolean = await storyRepository.existingStoryById(id);
    if (!existingStory) {
        throw new exceptions.ElementNotFoundException(`Story with id ${id} not found`);
    }

    const story = await storyRepository.getKelompokByStory(id);
    return story;
}
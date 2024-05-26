import * as exceptions from '../../common/exceptions/exceptions';
import * as restoryRepository from '../../data-access/repositories/restory/restory.repositories';

import { validateRestory } from './restory.validator';
import { Restory, RestoryOutput } from '../../data-access/models/restory/restory';

export const createRestory = async (newRestory:Restory): Promise<RestoryOutput> => {
    validateRestory(newRestory);

    const judulStoryExist: boolean = await restoryRepository.existJudulOfRestory(newRestory.judul);
    if (judulStoryExist) {
        throw new exceptions.ElementAlreadyExists(`Judul ${newRestory.judul} already exist`);
    }

    return await restoryRepository.createRestory(newRestory);
};

export const deleteRestory = async (id: string): Promise<string> => {
    const existingRestory: boolean = await restoryRepository.existingRestoryById(id);
    if (!existingRestory) {
        throw new exceptions.ElementNotFoundException(`Restory with id ${id} not found`);
    }

    return await restoryRepository.deleteRestory(id);
};

export const getKelompokByRestory = async (id: string): Promise<RestoryOutput | null> => {
    const existingRestory: boolean = await restoryRepository.existingRestoryById(id);
    if (!existingRestory) {
        throw new exceptions.ElementNotFoundException(`Restory with id ${id} not found`);
    }

    const restory = await restoryRepository.getKelompokByRestory(id);
    return restory;
};

export const getStoryOfRestoryById = async (id: string): Promise<RestoryOutput | null> => {
    const existingRestory: boolean = await restoryRepository.existingRestoryById(id);
    if (!existingRestory) {
        throw new exceptions.ElementNotFoundException(`Restory with id ${id} not found`);
    }

    const restory = await restoryRepository.getStoryOfRestoryById(id);
    return restory;
};


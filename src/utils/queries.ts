import { DeleteResult, InsertResult, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Url } from "../entity/Url";

export const getAllUrls = async (): Promise<Url[]> => {
  return await AppDataSource.getRepository(Url)
    .createQueryBuilder("url")
    .getMany();
};

export const getByShortUrl = async (shortUrl: string): Promise<Url> => {
  return await AppDataSource.getRepository(Url)
    .createQueryBuilder("url")
    .where("url.short = :short", { short: shortUrl })
    .getOneOrFail();
};

export const getByShortId = async (id: string): Promise<Url> => {
  return await AppDataSource.getRepository(Url)
    .createQueryBuilder("url")
    .where("url.id = :id", { id: id })
    .getOneOrFail();
};

export const deleteUrlById = async (urlId: string): Promise<DeleteResult> => {
  return await AppDataSource.createQueryBuilder()
    .delete()
    .from(Url)
    .where("id = :id", { id: urlId })
    .execute();
};

export const createUrl = async (
  full: string,
  short: string
): Promise<InsertResult> => {
  return await AppDataSource.createQueryBuilder()
    .insert()
    .into(Url)
    .values([{ full, short, clicks: 0 }])
    .execute();
};

export const updateUrlVisits = async (
  id: number,
  clicks: number
): Promise<UpdateResult> => {
  return await AppDataSource.createQueryBuilder()
    .update(Url)
    .set({ clicks })
    .where("id = :id", { id })
    .execute();
};

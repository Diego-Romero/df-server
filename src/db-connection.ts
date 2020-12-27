import "reflect-metadata";
import { createConnection } from "typeorm";
import { Author } from "./entity/Author";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";

createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'diego',
    password: '',
    database: 'deepflow',
    entities: [
        Photo,
        PhotoMetadata,
        Author
    ],
    synchronize: true,
    logging: false
}).then(async connection => {
    console.log('DB loaded correctly :)')
    
    let photo = new Photo();
    photo.name = "photo name";
    photo.description = "in the arctic!";
    photo.views = 1;
    photo.isPublished = true;

    let metadata = new PhotoMetadata();
    metadata.height = 48;
    metadata.width = 48;
    metadata.photo = photo;

    let photoRepository = connection.getRepository(Photo);
    let metadataRepository = connection.getRepository(PhotoMetadata);

    await photoRepository.save(photo); // is enough to only save photo as we have cascade set to true
    // await metadataRepository.save(metadata);

    let photoToUpdate = await photoRepository.findOne(1);
    photoToUpdate!.name = "updated name";
    await photoRepository.save(photoToUpdate!);

    const photos = await photoRepository.find({ relations: ["metadata"]});

    // for more complex queries we can use query builder
    // let photos = await connection.getRepository(Photo)
    //     .createQueryBuilder("photo")
    //     .innerJoinAndSelect("photo.metadata", "metadata")
    //     .getMany();
    console.log(photos)

    // console.log(await photoRepository.find())
}).catch(err => {
    console.error(`PROBLEM LOADING THE DB: `, err);
})
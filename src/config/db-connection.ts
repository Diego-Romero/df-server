import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Album } from '../entity/Album';
import { Author } from '../entity/Author';
import { Photo } from '../entity/Photo';
import { PhotoMetadata } from '../entity/PhotoMetadata';
import { User } from '../entity/User';

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: "deepflow_user",
  password: "password",
  database: "deepflow",
  entities: [
    Photo,
    PhotoMetadata,
    Author,
    Album,
    User
  ],
  synchronize: true,
  logging: false,
}).then(async (connection) => {
  console.log('DB loaded correctly :)');

  // const album1 = new Album();
  // album1.name = "bears";
  // connection.manager.save(album1);

  // const album2 = new Album();
  // album2.name = "bears";
  // connection.manager.save(album2);

  // const photo = new Photo();
  // photo.name = 'photo name';
  // photo.description = 'in the arctic!';
  // photo.views = 1;
  // photo.isPublished = true;
  // photo.albums = [album1, album2]

  // const metadata = new PhotoMetadata();
  // metadata.height = 48;
  // metadata.width = 48;
  // metadata.photo = photo;

  // photo.metadata = metadata;

  // const photoRepository = connection.getRepository(Photo);

  // await photoRepository.save(photo); // is enough to only save photo as we have cascade set to true

  // // the way to load all the photos along with is associations
  // const photos = await photoRepository.find({ relations: ['metadata', 'albums'] });

  // console.log(photos);

}).catch((err) => {
  console.error('PROBLEM LOADING THE DB: ', err);
});

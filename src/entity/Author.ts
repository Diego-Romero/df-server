import {
  Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { Photo } from './Photo';

@Entity()
class Author {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @OneToMany(() => Photo, (photo) => photo.author)
    photos!: Photo[]
}

export default Author;

import {
  Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from './Author';
import { PhotoMetadata } from './PhotoMetadata';

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    name!: string;

    @Column({ length: 100 })
    description!: string;

    @Column()
    views!: number;

    @Column()
    isPublished!: boolean;

    // we add cascade true whenever we want to save both objects together and not separately
    @OneToOne(() => PhotoMetadata, (photoMetadata) => photoMetadata.photo, {
      cascade: true,
    })
    metadata!: PhotoMetadata;

    @ManyToOne(() => Author, (author: { photos: any; }) => author.photos)
    author!: Author;
}

import {
  Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { Album } from './Album';
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
  @OneToOne(type => PhotoMetadata, (metadata) => metadata.photo, {
    cascade: true,
  })
  metadata!: PhotoMetadata;

  @ManyToOne(type => Author, author => author.photos)
  author!: Author;

  @ManyToMany(type => Album, album => album.photos)
  albums!: Album[];

}

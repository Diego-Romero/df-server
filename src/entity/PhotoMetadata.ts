import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Photo } from "./Photo";


@Entity()
export class PhotoMetadata {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("int")
    height!: number;

    @Column("int")
    width!: number;

    // only the owning side of the relationship should have @JoinColumn
    // the owning side of the relationship contains a column with a foreign key in the db
    @OneToOne(type => Photo, photo => photo.metadata)
    @JoinColumn()
    photo!: Photo

}
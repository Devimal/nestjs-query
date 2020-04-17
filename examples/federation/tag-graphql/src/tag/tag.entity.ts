import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { TagTodoItemEntity } from './tag-todo-item.entity';

@Entity({ name: 'tag' })
export class TagEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @OneToMany(() => TagTodoItemEntity, (tagTodoItem) => tagTodoItem.tag)
  tagTodoItemEntities!: TagTodoItemEntity[];
}

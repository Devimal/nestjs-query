import { Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { TagEntity } from './tag.entity';

@Entity({ name: 'tag_todo_item' })
export class TagTodoItemEntity {
  @PrimaryColumn()
  tagId!: number;

  @PrimaryColumn()
  todoItemId!: number;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @ManyToOne(() => TagEntity, (tag) => tag.tagTodoItemEntities)
  @JoinColumn({ name: 'tagId' })
  tag!: TagTodoItemEntity[];
}

import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Item } from './Item';

@Entity('shoppinglist')
export class ShoppingList extends BaseEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({
    type: 'text',
    unique: true
  })
  name: string;

  @ManyToOne(type => Item, {cascade: true})
  @JoinColumn()
  items: Item[]

  @CreateDateColumn({
    type: 'timestamp'
  })
  created: string;
}
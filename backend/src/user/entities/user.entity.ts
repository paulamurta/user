import { BitToBooleanTransformer } from 'src/config/database/transformers/bit-to-boolean.transformer';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USER')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  user_name: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  user_email: string;

  @Column({
    type: 'bit',
    transformer: new BitToBooleanTransformer(),
  })
  user_status: boolean;
}

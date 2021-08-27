import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 }) 
  username: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column({default: 'user'})
  role: string;

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Employee } from "./Employee";

@Entity({ name: "assets" })
export class Asset {
  @PrimaryGeneratedColumn("increment", { type: "integer" })
  assetId: number;

  @Column({ type: "varchar", length: "100" })
  assetName: string;

  @Column({ type: "varchar", length: "100" })
  assetType: string;

  @ManyToOne(() => Employee, (employee) => employee.employeeId, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "employeeId" })
  employee: Employee;
}

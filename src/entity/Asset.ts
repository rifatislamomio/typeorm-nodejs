import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
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

  @OneToOne(() => Employee, (employee) => employee.employeeId, {
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "employeeId" })
  employee: Employee;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
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

  @Column({ nullable: true, type: "integer" })
  employeeId: number;

  //Relation
  @ManyToOne(() => Employee, (employee) => employee.employeeId, {
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "employeeId" })
  employee: Employee;
}

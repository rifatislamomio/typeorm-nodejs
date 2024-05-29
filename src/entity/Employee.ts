import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Asset } from "./Asset";

@Entity({ name: "employees" })
export class Employee {
  @PrimaryGeneratedColumn("increment", { type: "integer" })
  employeeId: number;

  @Column({ type: "varchar", length: "100" })
  name: string;

  @Column({ type: "varchar", length: "100" })
  department: string;

  @OneToMany(() => Asset, (asset) => asset.employee)
  assets: Asset[];
}

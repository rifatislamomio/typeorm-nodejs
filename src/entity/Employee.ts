import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "employees" })
export class Employee {

  @PrimaryGeneratedColumn("increment", { type: "integer" })
  employeeId: number;

  @Column({ type: "varchar", length: "100" })
  name: string;

  @Column({ type: "varchar", length: "100" })
  department: string;
}

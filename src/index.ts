import {
  AppDataSource,
  assetRepository,
  employeeRepository,
} from "./dataSource";
import { Asset } from "./entity/Asset";
import { Employee } from "./entity/Employee";

AppDataSource.initialize()
  .then(async () => {
    console.log(":::Connected:::");

    await seed();
    getAllEmployees().then((data) =>
      console.log(JSON.stringify(data, null, 2))
    );
  })
  .catch((error) => console.log(error));

const seed = async () => {
  const emp = employeeRepository.create({
    name: "Adam",
    department: "SD",
  });
  await employeeRepository.save(emp);
};

const getEmployeeById = async (id: number): Promise<Employee> => {
  return employeeRepository.findOne({
    where: { employeeId: id },
  });
};

const getAssetById = async (id: number): Promise<Asset> => {
  return assetRepository.findOne({
    where: {
      assetId: id,
    },
    relations: ["employee"],
  });
};

const getAllEmployees = () => {
  return employeeRepository
    .createQueryBuilder("employee")
    .leftJoinAndSelect("employee.assets", "asset")
    .getMany();
};

const getAllAssets = async (): Promise<Asset[]> => {
  return assetRepository.find();
};

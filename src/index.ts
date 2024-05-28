import {
  AppDataSource,
  assetRepository,
  employeeRepository,
} from "./dataSource";
import { Asset } from "./entity/Asset";
import { Employee } from "./entity/Employee";

AppDataSource.initialize()
  .then(async () => {
    console.log("Connected");
    await seed();
  })
  .catch((error) => console.log(error));

const seed = async () => {
  const emp = employeeRepository.create({
    name: "Adam",
    department: "SD",
  });
  await employeeRepository.save(emp);

  const asset1 = assetRepository.create({
    assetName: "Hp Laptop",
    assetType: "IT",
    employee: emp,
  });

  await assetRepository.save(asset1);

  const asset2 = assetRepository.create({
    assetName: "Keyboard",
    assetType: "IT",
    employee: emp,
  });

  await assetRepository.save(asset2);
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

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
    // await seed();

    getAssetById(5).then((data) => {
      console.log(data);
    });
  })
  .catch((error) => console.log(error));

const seed = async () => {
  const emp = employeeRepository.create({
    name: "Adam",
    department: "SD",
  });
  await employeeRepository.save(emp);

  const asset = assetRepository.create({
    assetName: "Hp Laptop",
    assetType: "IT",
    employee: emp,
  });

  await assetRepository.save(asset);
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

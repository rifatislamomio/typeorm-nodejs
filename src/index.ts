import {
  AppDataSource,
  assetRepository,
  employeeRepository,
} from "./dataSource";

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
  const res = await employeeRepository.save(emp);
  console.log("🚀 ~ seed ~ res:", res);

  const asset = assetRepository.create({
    assetName: "Hp Laptop",
    assetType: "IT",
    employee: res,
  });

  const resp = await assetRepository.save(asset);
  console.log("🚀 ~ seed ~ resp:", resp);
};

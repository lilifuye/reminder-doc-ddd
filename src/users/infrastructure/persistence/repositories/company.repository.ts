import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CompanyEntity } from "../entities/company.entity";
import { CompanyMapper } from '../../../application/mappers/company.mapper';
import { CompanyRepository } from "src/users/domain/aggregates/client/company.repository";
import { Company } from "src/users/domain/aggregates/client/company.entity";

export class CompanyEntityRepository implements CompanyRepository  {
  constructor(
    @InjectRepository(CompanyEntity)
    private companyRepository: Repository<CompanyEntity>,
  ) {}

  async create(company: Company): Promise<Company> {
    let companyEntity: CompanyEntity = CompanyMapper.domainToEntity(company);
    companyEntity = await this.companyRepository.save(companyEntity);
    return CompanyMapper.entityToDomain(companyEntity);
  }

  async update(company: Company): Promise<Company> {
    let companyEntity: CompanyEntity = CompanyMapper.domainToEntity(company);
    let companyId: number = company.getId().getValue();
    await this.companyRepository.update({ id: companyId }, companyEntity);
    return company;
  }

  async delete(companyId: number): Promise<boolean> {
    await this.companyRepository.delete({ id: companyId });
    return true;
  }

  async getById(id: number): Promise<Company> {
    let companyEntity: CompanyEntity = await this.companyRepository.findOne({ where: { id: id } });
    return CompanyMapper.entityToDomain(companyEntity);
  }

  async getByName(name: string): Promise<Company> {
    let companyEntity: CompanyEntity = await this.companyRepository.createQueryBuilder('company').where("company.companyName.value = :companyName", { companyName: name }).getOne();
    return CompanyMapper.entityToDomain(companyEntity);
  }
  
  async getByRuc(ruc: string): Promise<Company> {
    let companyEntity: CompanyEntity = await this.companyRepository.createQueryBuilder().where("ruc = :ruc", { ruc }).getOne();
    return CompanyMapper.entityToDomain(companyEntity);
  }
}
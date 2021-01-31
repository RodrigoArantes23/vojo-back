import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { UpdateJobDto } from './dtos/job-update.dto';
import { IJob } from '@/modules/jobs/interfaces/job.interface';

@Injectable()
export class JobService {
  constructor(
    @InjectModel('Job')
    private readonly jobModel: Model<IJob>,
  ) {}
  async getJobs(): Promise<IJob[]> {
    const jobs = await this.jobModel.find({}).exec();
    return jobs;
  }
  async getJob(id): Promise<IJob> {
    const job = await this.jobModel.findById(id).exec();
    if (!job)
      throw new HttpException('Vaga não encontrada.', HttpStatus.BAD_REQUEST);
    return job;
  }
  async updateJob(data: UpdateJobDto): Promise<IJob> {
    const { _id } = data;

    const job = await this.jobModel.findById(_id).exec();
    if (!job)
      throw new HttpException('Vaga não encontrada.', HttpStatus.BAD_REQUEST);

    const updatedJob = {
      id: data._id,
      title: data.title,
      description: data.description,
      totalSpots: data.totalSpots,
      education: data.education,
      requirements: data.requirements,
      information: data.information,
      company: data.company,
      location: data.location,
      compensation: data.compensation,
    };

    try {
      return await this.jobModel.update({ _id: _id }, updatedJob);
    } catch (err) {
      throw new Error(err);
    }
  }
}

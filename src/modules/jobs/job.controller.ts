import {
  Body,
  Controller,
  Get,
  Put,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

import { JobService } from './job.service';
import { UpdateJobDto } from './dtos/job-update.dto';

@Controller('v3/jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  @UseGuards(AuthGuard())
  async getJobs(): Promise<object> {
    const jobs = await this.jobService.getJobs();
    return { data: jobs };
  }

  @Get('/:id')
  @UseGuards(AuthGuard())
  async getJob(@Param('id') id): Promise<object> {
    const job = await this.jobService.getJob(id);
    return { data: job };
  }

  @Put()
  @UseGuards(AuthGuard())
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateJob(@Body() updateJobDto: UpdateJobDto): Promise<object> {
    const updatedJob = await this.jobService.updateJob(updateJobDto);

    return { data: updatedJob };
  }
}

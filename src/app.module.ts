import { Module } from '@nestjs/common';
import { ExceptionModule } from './infrastructure/exceptions/exceptions.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { PrismaModule } from './infrastructure/prisma/prisma.module';

@Module({
  imports: [ExceptionModule, LoggerModule, PrismaModule],
  providers: [],
})
export class AppModule {}

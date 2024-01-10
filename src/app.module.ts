import { Module } from '@nestjs/common';
import { ExceptionModule } from './infrastructure/exceptions/exceptions.module';
import { LoggerModule } from './infrastructure/logger/logger.module';

@Module({
  imports: [ExceptionModule, LoggerModule],
  providers: [],
})
export class AppModule {}

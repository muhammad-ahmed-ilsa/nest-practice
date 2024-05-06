import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Item } from './entities/item.entity';
import { Logger } from '@nestjs/common';

@EventSubscriber()
export class ItemSubscriber implements EntitySubscriberInterface<Item> {
  private readonly logger = new Logger(ItemSubscriber.name);

  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo(): string | Function {
    return Item;
  }
  beforeInsert(event: InsertEvent<Item>): void | Promise<any> {
    this.logger.log(`before Insert`, JSON.stringify(event.entity));
  }

  afterInsert(event: InsertEvent<Item>): void | Promise<any> {
    this.logger.log(`after Insert`, JSON.stringify(event.entity));
  }
}

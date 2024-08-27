// src/surrealdb/surrealdb.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import Surreal from 'surrealdb.js';

@Injectable()
export class SurrealDBService implements OnModuleInit {
  private db: Surreal;

  async onModuleInit() {
    this.db = new Surreal();

    // Connect to SurrealDB
    console.info("Connecting to SurrealDB...");

    try {
        await this.db.connect('http://localhost:8000/rpc', {
            namespace: 'cloud',
            database: 'cloud',
            auth: {
                username: 'cloud',
                password: 'cloudpass$',
            },
        });
        console.info("Successfully connected to SurrealDB!");
        return this.db;
    } catch (err) {
        console.error("Failed to connect to SurrealDB:");
        //console.error(err);
        throw err;
    }
  }

  async query(query: string, vars?: Record<string, any>): Promise<any> {
    return this.db.query(query, vars);
  }

  async select(table: string): Promise<any> {
    return this.db.query(`SELECT * FROM ${table}`);
  }

  async create(table: string, data: Record<string, any>): Promise<any> {
    return this.db.query(`INSERT INTO ${table} SET ?`, data);
  }
}

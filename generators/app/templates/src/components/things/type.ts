interface Thing {
  readonly _id?: string;
  readonly id?: string;
  readonly name: string;
  readonly description?: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export {
  Thing,
};

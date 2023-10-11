// https://refactoring.guru/design-patterns/builder
// https://refactoring.guru/design-patterns/builder/typescript/example#lang-features
// Builder is a creational design pattern that lets you construct complex objects step by step.
// The pattern allows you to produce different types and representations of an object using the same construction code.

export interface IBuilder {
  transformation: Transformation;
  addFormat(format: string): this;
  addResolution(resolution: { w: number; h: number }): this;
}

interface ITransformation {
  modifications: IModifications;
  listTransformation(): void;
}

interface IModifications {
  resolutions: {
    w: number;
    h: number;
  }[];
  formats: string[];
}

class Transformation implements ITransformation {
  modifications: IModifications = {
    resolutions: [],
    formats: [],
  };
  listTransformation() {
    const transformation: string[] = [];
    this.modifications.formats.forEach((format) => {
      this.modifications.resolutions.forEach((resolution) => {
        transformation.push(
          `{ format: ${format}; resolution: w-${resolution.w}px, h-${resolution.h}px }`,
        );
      });
    });
    console.log(`The transformations are:\n${transformation.join('\n')}`);
  }
}

class Builder implements IBuilder {
  _transformation!: Transformation;

  constructor() {
    this.reset();
  }
  addFormat(format: string): this {
    this._transformation.modifications.formats.push(format);
    return this;
  }
  addResolution(resolution: { w: number; h: number }): this {
    this._transformation.modifications.resolutions.push(resolution);
    return this;
  }

  reset(): void {
    this._transformation = new Transformation();
  }

  get transformation(): Transformation {
    const transformation = this._transformation;
    this.reset();
    return transformation;
  }
}

class Director {
  private _builder: Builder;
  constructor() {
    this._builder = new Builder();
  }

  buildFHD() {
    this._builder
      .addFormat('jpeg')
      .addFormat('gif')
      .addResolution({ w: 1920, h: 1080 });
  }
  build4K() {
    this._builder
      .addFormat('jpeg')
      .addFormat('gif')
      .addFormat('png')
      .addResolution({ w: 3840, h: 2160 });
  }

  get builder(): Builder {
    return this._builder;
  }
}

class Client {
  constructor(private director: Director) {
    this.director.build4K();
    // this.director.buildFHD();
    this.director.builder.transformation.listTransformation();
  }
}

const director = new Director();
new Client(director);

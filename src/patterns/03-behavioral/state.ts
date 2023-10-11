// State is a behavioral design pattern that lets an object alterits behavior
// when its internal state changes. It appears as if the object changed its class.

export interface IState {
  name: string;
  playAnimation(): void;
}

interface IStateStack {
  states: IState[];
  currentState: IState;
  change(): void;
  playAnimation(): void;
}

class SlideIntro implements IState {
  name = 'Intro';
  playAnimation(): void {
    console.log('Intro animation started');
  }
}

class SlideMain implements IState {
  name = 'Main';
  playAnimation(): void {
    console.log('Main animation started');
  }
}

class SlideOutro implements IState {
  name = 'Outro';
  playAnimation(): void {
    console.log('Outro animation started');
  }
}

class Carousel implements IStateStack {
  states: IState[];
  currentState!: IState;

  constructor() {
    this.states = [new SlideIntro(), new SlideMain(), new SlideOutro()];
    this.currentState = this.states[0];
  }

  change(): void {
    const index = this.states.findIndex((state) => state === this.currentState);
    if (index === this.states.length - 1) {
      this.currentState = this.states[0];
    } else {
      this.currentState = this.states[index + 1];
    }
  }

  playAnimation() {
    this.currentState.playAnimation();
  }
}

const carousel = new Carousel();
carousel.playAnimation();
carousel.change();
carousel.playAnimation();
carousel.change();
carousel.playAnimation();
carousel.change();
carousel.playAnimation();

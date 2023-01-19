class BodyFeatures {
    constructor(type) {
      this.type = type;
    }
  }
  
  class EyeColor extends BodyFeatures {
    constructor(color) {
      super('EyeColor');
      this.color = color;
    }
  }
  
  class HairLenght extends BodyFeatures {
    constructor(lenght) {
      super('HairLenght');
      this.lenght = lenght;
    }
  }
  
  const EyeColour = createFeature('EyeColor', { color: 'brown' });
  console.log(EyeColor);
  
  const HairLenght1 = createFeature('HairLenght', { lenght: 'short' });
  console.log(HairLenght); 

  function createFeature(type, options) {
    switch(type) {
      case 'EyeColor':
        return new EyeColour(options.color);
      case 'HairLenght':
        return new HairLenght1(options.lenght);
      default:
        throw new Error(`This body feature doesn't exist: ${type}`);
    }
  }
  
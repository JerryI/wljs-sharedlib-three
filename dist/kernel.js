const loader = async (self) => {
    self.THREE         = (await import('./three.module-494e6c91.js'));
    self.OrbitControls = (await import('./OrbitControls-199dbeff.js')).OrbitControls;
    self.RGBELoader    = (await import('./RGBELoader-dc5102ec.js')).RGBELoader; 
    self.CSS2D         = (await import('./labels-7119234c.js'));
    
    console.log('THREE shared library loader!');
  };

  const loader1 = async (self) => {
    self.Water = (await import('./Water-73e87197.js')).Water;
  };

  const loader2 = async (self) => {
    self.TransformControls =  (await import('./TransformControls-3d8bddf4.js')).TransformControls;
  };

  const loader3 = async (self) => {
    self.PointerLockControls = (await import('./PointerLockControls-a3da7dd0.js')).PointerLockControls;
  };

  const loader4 = async (self) => {
    self.RTX = (await import('./index.module-9175e3c5.js'));
  };

  const loader5 = async (self) => {
    const engine = await import('./CSS2DRenderer-469b8bc0.js');
    self.CSS2DRenderer = engine.CSS2DRenderer;
    self.CSS2DObject = engine.CSS2DObject;
    //import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
  };

  const loader6 = async (self) => {
    const sprite = await import('./three-spritetext-4fb23878.js');
    self.SpriteText = sprite;
  };

  

  new interpretate.shared(
    "THREE",
    loader
  );

  new interpretate.shared(
    "THREEWater",
    loader1
  );  

  new interpretate.shared(
    "THREETransformControls",
    loader2
  ); 

  new interpretate.shared(
    "THREEPointerLockControls",
    loader3
  );

  new interpretate.shared(
    "THREERTX",
    loader4
  );

  new interpretate.shared(
    "THREECSS",
    loader5
  );  

  new interpretate.shared(
    "SpriteText",
    loader6
  );

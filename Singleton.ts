type Singleton = {
  shared: number;
};

let mSingleton: Singleton;

export const getInstance = () => {
  if (mSingleton) return mSingleton;
  else
    mSingleton = {
      shared: 3,
    };
  return mSingleton;
};

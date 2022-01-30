let profile = {
  username: "yousuf",
  age: 25,
  cord: {
    lat: 0,
    lng: 20,
  },
  setAge(age: number) {
    this.age = age;
  },
};

const { age, username }: { age: number; username: string } = profile;
const {
  cord: { lat, lng },
}: { cord: { lat: number; lng: number } } = profile;

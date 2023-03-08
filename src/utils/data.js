import {
  dogBreeds,
  catBreeds,
  rodentTypes,
  lizardTypes,
} from "../utils/breeds";

export const animalSpecies = [
  { label: "dog 🐶", value: "dog" },
  { label: "cat 🐱", value: "cat" },
  { label: "rodent/rabbit 🐹🐰", value: "rodent" },
  { label: "lizard 🦎", value: "lizard" },
];

export const imgVenues = [
  { label: "cozy cabin 🪵", value: "in a cozy cabin" },
  { label: "grassy field 🌾", value: "on a grassy field" },
  { label: "white sand beach 🏝️", value: "on a white sand beach" },
  { label: "chic cafe ☕️", value: "in a chic cafe" },
  { label: "modern living room 🪟", value: "in a modern living room" },
  { label: "verdant park 🌲", value: "in a verdant park" },
  { label: "comfy couch 🛋️", value: "curled up on a comfy cabin" },
];

export const imgStyles = [
  { label: "Hayao Miyazaki animation 🐡", value: "Hayao Miyazaki animation" },
  { label: "New Yorker cartoon ✏️", value: "New Yorker cartoon" },
  { label: "Marvel comic 💥", value: "Marvel comic book" },
  { label: "Scooby Doo cartoon 🚐", value: "Scooby Doo cartoon" },
  { label: "Claymation style 🗿", value: "Claymation" },
  { label: "Pixar animation 📺", value: "Pixar animation" },
  {
    label: "Leonardo da Vinci oil painting 🎨",
    value: "Leonardo da Vinci oil painting",
  },
  {
    label: "surrealist Frida Kahlo masterpiece 🖼️",
    value: "surrealist Frida Kahlo masterpiece",
  },
  {
    label: "high-definition portrait photo 📷",
    value: "high-definition portrait photo",
  },
];

export function breedOptions(species) {
  return speciesTypes[species];
}
export const speciesTypes = {
  dog: dogBreeds,
  cat: catBreeds,
  rodent: rodentTypes,
  lizard: lizardTypes,
};

export const personality = [
  { label: "playful" },
  { label: "energetic" },
  { label: "reserved" },
  { label: "gentle" },
  { label: "sweet" },
];

interface Fruits {
  [key: number]: Fruits;
}

interface Response {
  message?: string;
  status?: number;
}

export interface FruitState {
  Fruits: Fruits;
  errors: Response;
  currentFruits:FruitState;
}

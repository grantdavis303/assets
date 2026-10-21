#include <stdio.h>

int main() {
  int counter = 0;
  int byte_length = 32;

  int num;
  printf("Type a number: ");

  scanf("%d", &num);

  for (int i = 0; i < num; i++) {
    counter += 1;

    printf("x");

    if (counter == byte_length) {
      printf("\n");

      counter = 0;
    }
  }

  return 0;
}

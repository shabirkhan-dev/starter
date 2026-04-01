#include <assert.h>
#include <string.h>
#include "../src/message.h"

int main(void) {
    assert(strcmp(starter_message(), "Hello from Starter Kit C app") == 0);
    return 0;
}

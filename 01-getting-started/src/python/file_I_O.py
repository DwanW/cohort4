import os
# determine number of lines in a javascript file
def num_of_lines(filename):
    count = 0
    with open(filename) as f:
        for line in f:
            count += 1
        print(count)

# determine number of else statement in a javascript file
def num_of_else(filename):
    count = 0
    with open(filename) as f:
        for line in f:
            count += line.count('else')
        print(count)

# determine number of char in a javascript file
def num_of_char(filename):
    count = 0
    with open(filename) as f:
        for line in f:
            count += len(line) - line.count('\n')
        print(count)

# num_of_lines('example.js')
# num_of_else('example.js')
# num_of_char('example.js')


def read_files(directory):
    with os.scandir(directory) as entries:
        num_of_file = 0
        total_size = 0
        for entry in entries:
            if not entry.name.startswith('.') and entry.is_file():
                print(entry.name)
                num_of_file += 1
                print(f'{entry.stat().st_size} bytes')
                total_size += entry.stat().st_size
        print(f'number of files in {directory} is {num_of_file}, and total size of the directory is {total_size} bytes')


read_files('.')


with open('Census_by_Community_2018.csv') as f:
    res_cnt_by_class = {}
    res_cnt_by_sector = {}
    header_tuple = tuple(f.readline().split(','))
    class_index = header_tuple.index('CLASS')
    sector_index = header_tuple.index('SECTOR')
    res_cnt_index = header_tuple.index('RES_CNT')
    num_of_lines = 0
    for lines in f:
        num_of_lines += 1
        line_tuple = tuple(lines.split(','))
        line_class = line_tuple[class_index]
        line_sector = line_tuple[sector_index]
        line_res_cnt = int(line_tuple[res_cnt_index])
        try:
            res_cnt_by_class[line_class] += line_res_cnt
        except:
            res_cnt_by_class[line_class] = line_res_cnt
        try:
            res_cnt_by_sector[line_sector] += line_res_cnt
        except:
            res_cnt_by_sector[line_sector] = line_res_cnt

    # print(res_cnt_by_class)
    # print(res_cnt_by_sector)
    # print(num_of_lines)

    with open('report.txt', mode='w') as my_file:
        my_file.write('RES_CNT by CLASS:\n')
        for item, value in res_cnt_by_class.items():
            my_file.write(f'   {item} {value}\n')
        my_file.write('RES_CNT by SECTOR:\n')
        for item, value in res_cnt_by_sector.items():
            my_file.write(f'   {item} {value}\n')
        my_file.write(f'TOTAL NUMBER OF LINES: {num_of_lines}')


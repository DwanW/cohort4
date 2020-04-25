def cantax(num):
    if num > 214368:
        return round((num - 214368) * 0.33 + 49644.31, 2)
    elif num > 150473:
        return round((num - 150473) * 0.29 + 31114.76, 2)
    elif num > 97069:
        return round((num - 97069) * 0.26 + 17229.72, 2)
    elif num > 48535:
        return round((num - 48535) * 0.205 + 7280.25, 2)
    else:
        return round(num * 0.15, 2)



# return (num > 214368)? `$ ${((num - 214368) * 0.33 + 49644.31).toFixed(2)}` :
#         (num > 150473)? `$ ${((num - 150473) * 0.29 + 31114.76).toFixed(2)}` :
#         (num > 97069)? `$ ${((num - 97069) * 0.26 + 17229.72).toFixed(2)}` :
#         (num > 48535)? `$ ${((num - 48535) * 0.205 + 7280.25).toFixed(2)}` :
#         `$ ${(num * 0.15).toFixed(2)}`;

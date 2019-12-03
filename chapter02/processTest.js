function add(i, j)
{
    console.log(i+j);
}

add(parseInt(process.argv[2]), parseInt(process.argv[3]));
for (var i = 0; i < 4; i++)
    console.log(process.argv[i]);
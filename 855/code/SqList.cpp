#include<iostream>

using namespace std;

#define MAX_SIZE 50
#define INIT_SIZE 50
#define ElemType int

// 静态表
typedef struct
{
    ElemType data[MAX_SIZE];
    int MaxSize;
    int length;
} SqList;

//动态表
typedef struct
{
    ElemType *data;
    int length;
} SeqList;

//初始化
void Init_C(SeqList &L){
    L.data = (ElemType *)malloc(sizeof(ElemType) *INIT_SIZE);
}

void create(SeqList &L){
    L.data = new ElemType[INIT_SIZE];
    //C语言的动态分配方式如下：
    //L.data = (ElemType *)malloc(sizeof(ElemType) *INIT_SIZE);
}

int main(){
    cout << "hello!";
    return 0;
}
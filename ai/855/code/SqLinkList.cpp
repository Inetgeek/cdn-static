#include <iostream>
using namespace std;

#define ElemType int

typedef struct LNode{
    ElemType data;
    struct LNode *next;
}LNode, *LinkList;

LinkList insert_Head(LinkList &L){
    LNode *s;
    int x;
    L = (LinkList)malloc(sizeof(LNode));
    L->next=NULL;
    while(x!=999){
        scanf("%d", &x);
        s=(LNode*)malloc(sizeof(LNode));
        s->data=x;
        s->next=L->next;
        L->next=s;
    }
    return L;
}

//O(n)
LNode *GetElemByPos(LinkList L, int i){
    if(i<1) return NULL;
    int j=1;
    LNode *p = L->next;
    while(p!=NULL&&j<i){
        p=p->next;
        j++;
    }
    return p;
}

LNode *GetElemByVal(LinkList L, ElemType e){
    LNode *p=L->next;
    while(p!=NULL&&p->data!=e) p=p->next;
    return p;
}

LNode *Delete(LinkList &L, ElemType e){
    if(L->data==NULL) return;
    LNode *p = GetElemByVal(L, e);
    if(p==NULL) return;
    LNode *q=p->next;
    p->next=q->next;
    free(q);
}
#include <iostream>

typedef char ItemFila; // Define o tipo de itens da Fila 

class NodeType{
    public:
    ItemFila item;
    NodeType* proximo;   
};

class filaDinamica{
    private:
    NodeType* front;
    NodeType* rear;

    public:
    filaDinamica(){
        front = nullptr;
        rear = nullptr;
    };

    ~filaDinamica(){
        NodeType* temporario;
        while(front != nullptr){
            temporario = front;
            front = front->proximo;
            delete temporario;
        }
        rear = NULL;
    };

    bool isEmpty(){
         
    };

    bool isFull(){

    };

    void insertItem(ItemFila item);

    ItemFila removeItem();

    void printQueue();

};
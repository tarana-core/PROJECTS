#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

class Student
{
private:
    unordered_map<string, float> marks;
    float Cgpa;

public:
    string Name;
    int Age;
    int RollNumber;

    string Departement;
    string Section;

    Student(string name, int age, int rollnumber, float cgpa, string dep, string sec)
    {
        this->Age = age;
        this->Cgpa = cgpa;
        this->Departement = dep;
        this->Name = name;
        this->RollNumber = rollnumber;
        this->Section = sec;
    }



    void setMarks()
    {
        int n;
        cout << "Enter Number of Subject:";
        cin >> n;
        cout << "Enter Subjects:" << endl;
        for (int i = 0; i < n; i++)
        {
            
            string SubName;
            getline(cin, SubName);
            float mark;
            cin >> mark;
            marks[SubName] = mark;
        }
        float totalmarks = 0;
        for (auto val : marks)
        {
            totalmarks += val.second;
        }
        Cgpa = totalmarks / n;
    }
};

int main()
{

    return 0;
}
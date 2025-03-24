import { FormEvent, useState } from 'react'
import useFetch from '../hooks/useFetch'
import useLocalStorage from '../hooks/useLocalStorage'

interface AlunosData {
    nome: string;
    idade: number;
    cidade: string;
}  

const BuscarAlunos = () => {

    const [student, setStudent] = useState<string | null>(null)
    const [ wantedStudent , setWantedStudent] = useState<number | null>(null)

    const { data } = useFetch<AlunosData[]>(wantedStudent? "http://localhost:3000/alunos" : "")

    const [ previousStudent , setPreviousStudent ] = useLocalStorage<string>('student' , '');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (student) {
            const studentId = parseInt(student, 10);
            setWantedStudent(studentId);
            setPreviousStudent(studentId.toString());
        }
    }

  return (
    <section>
        <h3 className='page-title'>Digite abaixo o ID do aluno que você quer pesquisar</h3>
        <form onSubmit={handleSubmit}>
            <input type="number" name="wanted-student" id="wanted-student" 
                placeholder='Digite o ID do aluno desejado'
                min={1}
                onChange={e => setStudent(e.target.value)}
                style={{fontSize: 30}}
            />
            <br />
            <br />
            <button type='submit'>Buscar Estudante</button>
        </form>
        {data && wantedStudent && (
            <>
                <h3>ID desejado do aluno: {wantedStudent}</h3>
                <h4>Nome: {data[wantedStudent - 1].nome}</h4>
                <h4>Idade: {data[wantedStudent - 1].idade}</h4>
                <h4>Cidade: {data[wantedStudent - 1].cidade}</h4>
            </>
        )}
        {previousStudent &&
            <>
                <hr />
                <h4>O ultimo estudante buscado foi o: Aluno {previousStudent}</h4>
            </>
        }
    </section>
  )
}

export default BuscarAlunos
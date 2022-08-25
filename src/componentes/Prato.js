import './Prato.css'

const Prato =({nome, descricao, imagem, preco}) => {
    return (<div className='prato'>
        <div className='imagem-container'>
            <img src={imagem} alt={descricao}/>
        </div>
        <p className='nome'>
            <strong>{nome}</strong>
        </p>
        <p className='descricao'>
            {descricao}
        </p>
        <p className='preco'>
            R$ <strong>{preco}</strong>
        </p>
    </div>)
}

export default Prato


<%@ page pageEncoding="UTF-8" %>
            <div id="comandos">
                <a href="<%=request.getParameter("link")%>" class="botao">Adicionar</a>
                <div>
                    <form method="post">
                        <label for="busca">Busca</label>
                        <input type="text" name="busca" id="busca" placeholder="Digite para pesquisar"
                            value="<%= request.getParameter("busca") != null ? request.getParameter("busca") : "" %>">
                        <input type="submit" value="Buscar">
                    </form>
                </div>  
            </div>